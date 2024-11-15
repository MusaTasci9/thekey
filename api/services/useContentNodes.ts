import { useAuth } from "@/providers/AuthProvider";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ContentNode } from "../models/models";
import { GET_CONTENT_NODES } from "./graphql"; // Import from the new graphql file

// Custom Hook for Lazy Loading Content Nodes
export const useContentNodes = () => {
  const { user } = useAuth();

  console.log(user?.accessToken);
  const { data, loading, error, fetchMore } = useQuery(GET_CONTENT_NODES, {
    context: {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
    },
  });

  const [nodes, setNodes] = useState<ContentNode[]>([]);

  useEffect(() => {
    if (data && data.Admin?.Tree?.GetContentNodes?.edges) {
      setNodes(data.Admin.Tree.GetContentNodes.edges);
    }
  }, [data]);

  const loadMoreNodes = () => {
    if (fetchMore) {
      fetchMore({
        variables: {
          // Not best practive to use length, with more access and understanding of the backend I would try to use some more dynamic stuff. You can not now that the order of the items in the backend will be the same.
          cursor: nodes.length,
        },
      }).then(({ data }) => {
        const moreNodes = data.Admin.Tree.GetContentNodes.edges;
        setNodes((prevNodes) => [...prevNodes, ...moreNodes]);
      });
    }
  };

  return {
    nodes,
    loading,
    error,
    loadMoreNodes,
  };
};
