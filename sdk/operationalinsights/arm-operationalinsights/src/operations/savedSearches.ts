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
import * as Models from "../models";
import * as Mappers from "../models/savedSearchesMappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";

/** Class representing a SavedSearches. */
export class SavedSearches {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Create a SavedSearches.
   * @param {OperationalInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified saved search in a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, savedSearchId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, savedSearchId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, savedSearchId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, workspaceName: string, savedSearchId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        savedSearchId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Creates or updates a saved search for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param parameters The parameters required to save a search.
   * @param [options] The optional parameters
   * @returns Promise<Models.SavedSearchesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, savedSearchId: string, parameters: Models.SavedSearch, options?: msRest.RequestOptionsBase): Promise<Models.SavedSearchesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param parameters The parameters required to save a search.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, savedSearchId: string, parameters: Models.SavedSearch, callback: msRest.ServiceCallback<Models.SavedSearch>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param parameters The parameters required to save a search.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, savedSearchId: string, parameters: Models.SavedSearch, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SavedSearch>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, savedSearchId: string, parameters: Models.SavedSearch, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SavedSearch>, callback?: msRest.ServiceCallback<Models.SavedSearch>): Promise<Models.SavedSearchesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        savedSearchId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.SavedSearchesCreateOrUpdateResponse>;
  }

  /**
   * Gets the specified saved search for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param [options] The optional parameters
   * @returns Promise<Models.SavedSearchesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, savedSearchId: string, options?: msRest.RequestOptionsBase): Promise<Models.SavedSearchesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, savedSearchId: string, callback: msRest.ServiceCallback<Models.SavedSearch>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, savedSearchId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SavedSearch>): void;
  get(resourceGroupName: string, workspaceName: string, savedSearchId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SavedSearch>, callback?: msRest.ServiceCallback<Models.SavedSearch>): Promise<Models.SavedSearchesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        savedSearchId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SavedSearchesGetResponse>;
  }

  /**
   * Gets the saved searches for a given Log Analytics Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.SavedSearchesListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SavedSearchesListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.SavedSearchesListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SavedSearchesListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SavedSearchesListResult>, callback?: msRest.ServiceCallback<Models.SavedSearchesListResult>): Promise<Models.SavedSearchesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.SavedSearchesListByWorkspaceResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.savedSearchId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.savedSearchId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SavedSearch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SavedSearch
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.savedSearchId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SavedSearch
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SavedSearchesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
