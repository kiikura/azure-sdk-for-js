/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-07-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-07-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-04-04',
    type: {
      name: "String"
    }
  }
};
export const apiVersion3: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-10-01',
    type: {
      name: "String"
    }
  }
};
export const apply: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "apply"
  ],
  mapper: {
    serializedName: "$apply",
    type: {
      name: "String"
    }
  }
};
export const authorizationNamespace: msRest.OperationURLParameter = {
  parameterPath: "authorizationNamespace",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "authorizationNamespace",
    defaultValue: 'Microsoft.Authorization',
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const from: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "from"
  ],
  mapper: {
    serializedName: "$from",
    type: {
      name: "DateTime"
    }
  }
};
export const managementGroupId: msRest.OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    required: true,
    serializedName: "managementGroupId",
    type: {
      name: "String"
    }
  }
};
export const managementGroupName: msRest.OperationURLParameter = {
  parameterPath: "managementGroupName",
  mapper: {
    required: true,
    serializedName: "managementGroupName",
    type: {
      name: "String"
    }
  }
};
export const managementGroupsNamespace: msRest.OperationURLParameter = {
  parameterPath: "managementGroupsNamespace",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "managementGroupsNamespace",
    defaultValue: 'Microsoft.Management',
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const orderBy: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "orderBy"
  ],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};
export const policyAssignmentName: msRest.OperationURLParameter = {
  parameterPath: "policyAssignmentName",
  mapper: {
    required: true,
    serializedName: "policyAssignmentName",
    type: {
      name: "String"
    }
  }
};
export const policyDefinitionName: msRest.OperationURLParameter = {
  parameterPath: "policyDefinitionName",
  mapper: {
    required: true,
    serializedName: "policyDefinitionName",
    type: {
      name: "String"
    }
  }
};
export const policyEventsResource: msRest.OperationURLParameter = {
  parameterPath: "policyEventsResource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "policyEventsResource",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const policySetDefinitionName: msRest.OperationURLParameter = {
  parameterPath: "policySetDefinitionName",
  mapper: {
    required: true,
    serializedName: "policySetDefinitionName",
    type: {
      name: "String"
    }
  }
};
export const policyStatesResource: msRest.OperationURLParameter = {
  parameterPath: "policyStatesResource",
  mapper: {
    required: true,
    serializedName: "policyStatesResource",
    type: {
      name: "String"
    }
  }
};
export const policyStatesSummaryResource: msRest.OperationURLParameter = {
  parameterPath: "policyStatesSummaryResource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "policyStatesSummaryResource",
    defaultValue: 'latest',
    type: {
      name: "String"
    }
  }
};
export const policyTrackedResourcesResource: msRest.OperationURLParameter = {
  parameterPath: "policyTrackedResourcesResource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "policyTrackedResourcesResource",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const remediationName: msRest.OperationURLParameter = {
  parameterPath: "remediationName",
  mapper: {
    required: true,
    serializedName: "remediationName",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const resourceId: msRest.OperationURLParameter = {
  parameterPath: "resourceId",
  mapper: {
    required: true,
    serializedName: "resourceId",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const resourceName: msRest.OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    required: true,
    serializedName: "resourceName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const scope: msRest.OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    required: true,
    serializedName: "scope",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const select: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "select"
  ],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const to: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "to"
  ],
  mapper: {
    serializedName: "$to",
    type: {
      name: "DateTime"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "queryOptions",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};