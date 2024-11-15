export type User = {
  accessToken: string;
  refreshToken: string;
  username: string;
};

export type ContentNode = {
  node: {
    structureDefinition: {
      title: string;
    };
  };
};
