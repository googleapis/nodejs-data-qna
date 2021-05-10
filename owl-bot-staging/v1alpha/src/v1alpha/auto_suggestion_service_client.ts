// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';
import * as path from 'path';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1alpha/auto_suggestion_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './auto_suggestion_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  This stateless API provides automatic suggestions for natural language
 *  queries for the data sources in the provided project and location.
 *
 *  The service provides a resourceless operation `suggestQueries` that can be
 *  called to get a list of suggestions for a given incomplete query and scope
 *  (or list of scopes) under which the query is to be interpreted.
 *
 *  There are two types of suggestions, ENTITY for single entity suggestions
 *  and TEMPLATE for full sentences. By default, both types are returned.
 *
 *  Example Request:
 *  ```
 *  GetSuggestions({
 *    parent: "locations/us/projects/my-project"
 *    scopes:
 *    "//bigquery.googleapis.com/projects/my-project/datasets/my-dataset/tables/my-table"
 *    query: "top it"
 *  })
 *  ```
 *
 *  The service will retrieve information based on the given scope(s) and give
 *  suggestions based on that (e.g. "top item" for "top it" if "item" is a known
 *  dimension for the provided scope).
 *  ```
 *  suggestions {
 *    suggestion_info {
 *      annotated_suggestion {
 *        text_formatted: "top item by sum of usd_revenue_net"
 *        markups {
 *          type: DIMENSION
 *          start_char_index: 4
 *          length: 4
 *        }
 *        markups {
 *          type: METRIC
 *          start_char_index: 19
 *          length: 15
 *        }
 *      }
 *      query_matches {
 *        start_char_index: 0
 *        length: 6
 *      }
 *    }
 *    suggestion_type: TEMPLATE
 *    ranking_score: 0.9
 *  }
 *  suggestions {
 *    suggestion_info {
 *      annotated_suggestion {
 *        text_formatted: "item"
 *        markups {
 *          type: DIMENSION
 *          start_char_index: 4
 *          length: 2
 *        }
 *      }
 *      query_matches {
 *        start_char_index: 0
 *        length: 6
 *      }
 *    }
 *    suggestion_type: ENTITY
 *    ranking_score: 0.8
 *  }
 *  ```
 * @class
 * @memberof v1alpha
 */
export class AutoSuggestionServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  autoSuggestionServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of AutoSuggestionServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof AutoSuggestionServiceClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      locationPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      questionPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/questions/{question}'
      ),
      userFeedbackPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/questions/{question}/userFeedback'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.dataqna.v1alpha.AutoSuggestionService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.autoSuggestionServiceStub) {
      return this.autoSuggestionServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.dataqna.v1alpha.AutoSuggestionService.
    this.autoSuggestionServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.dataqna.v1alpha.AutoSuggestionService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.dataqna.v1alpha.AutoSuggestionService,
        this._opts) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const autoSuggestionServiceStubMethods =
        ['suggestQueries'];
    for (const methodName of autoSuggestionServiceStubMethods) {
      const callPromise = this.autoSuggestionServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.autoSuggestionServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'dataqna.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'dataqna.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  suggestQueries(
      request: protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.dataqna.v1alpha.ISuggestQueriesResponse,
        protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest|undefined, {}|undefined
      ]>;
  suggestQueries(
      request: protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesResponse,
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest|null|undefined,
          {}|null|undefined>): void;
  suggestQueries(
      request: protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest,
      callback: Callback<
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesResponse,
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest|null|undefined,
          {}|null|undefined>): void;
/**
 * Gets a list of suggestions based on a prefix string.
 * AutoSuggestion tolerance should be less than 1 second.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The parent of the suggestion query is the resource denoting the project and
 *   location.
 * @param {string[]} request.scopes
 *   The scopes to which this search is restricted. The only supported scope
 *   pattern is
 *   `//bigquery.googleapis.com/projects/{GCP-PROJECT-ID}/datasets/{DATASET-ID}/tables/{TABLE-ID}`.
 * @param {string} request.query
 *   User query for which to generate suggestions. If the query is empty, zero
 *   state suggestions are returned. This allows UIs to display suggestions
 *   right away, helping the user to get a sense of what a query might look
 *   like.
 * @param {number[]} request.suggestionTypes
 *   The requested suggestion type. Multiple suggestion types can be
 *   requested, but there is no guarantee that the service will return
 *   suggestions for each type. Suggestions for a requested type might rank
 *   lower than suggestions for other types and the service may decide to cut
 *   these suggestions off.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [SuggestQueriesResponse]{@link google.cloud.dataqna.v1alpha.SuggestQueriesResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example
 * const [response] = await client.suggestQueries(request);
 */
  suggestQueries(
      request: protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesResponse,
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesResponse,
          protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.dataqna.v1alpha.ISuggestQueriesResponse,
        protos.google.cloud.dataqna.v1alpha.ISuggestQueriesRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.suggestQueries(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified location resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @returns {string} Resource name string.
   */
  locationPath(project:string,location:string) {
    return this.pathTemplates.locationPathTemplate.render({
      project: project,
      location: location,
    });
  }

  /**
   * Parse the project from Location resource.
   *
   * @param {string} locationName
   *   A fully-qualified path representing Location resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromLocationName(locationName: string) {
    return this.pathTemplates.locationPathTemplate.match(locationName).project;
  }

  /**
   * Parse the location from Location resource.
   *
   * @param {string} locationName
   *   A fully-qualified path representing Location resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromLocationName(locationName: string) {
    return this.pathTemplates.locationPathTemplate.match(locationName).location;
  }

  /**
   * Return a fully-qualified question resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} question
   * @returns {string} Resource name string.
   */
  questionPath(project:string,location:string,question:string) {
    return this.pathTemplates.questionPathTemplate.render({
      project: project,
      location: location,
      question: question,
    });
  }

  /**
   * Parse the project from Question resource.
   *
   * @param {string} questionName
   *   A fully-qualified path representing Question resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromQuestionName(questionName: string) {
    return this.pathTemplates.questionPathTemplate.match(questionName).project;
  }

  /**
   * Parse the location from Question resource.
   *
   * @param {string} questionName
   *   A fully-qualified path representing Question resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromQuestionName(questionName: string) {
    return this.pathTemplates.questionPathTemplate.match(questionName).location;
  }

  /**
   * Parse the question from Question resource.
   *
   * @param {string} questionName
   *   A fully-qualified path representing Question resource.
   * @returns {string} A string representing the question.
   */
  matchQuestionFromQuestionName(questionName: string) {
    return this.pathTemplates.questionPathTemplate.match(questionName).question;
  }

  /**
   * Return a fully-qualified userFeedback resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} question
   * @returns {string} Resource name string.
   */
  userFeedbackPath(project:string,location:string,question:string) {
    return this.pathTemplates.userFeedbackPathTemplate.render({
      project: project,
      location: location,
      question: question,
    });
  }

  /**
   * Parse the project from UserFeedback resource.
   *
   * @param {string} userFeedbackName
   *   A fully-qualified path representing UserFeedback resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromUserFeedbackName(userFeedbackName: string) {
    return this.pathTemplates.userFeedbackPathTemplate.match(userFeedbackName).project;
  }

  /**
   * Parse the location from UserFeedback resource.
   *
   * @param {string} userFeedbackName
   *   A fully-qualified path representing UserFeedback resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromUserFeedbackName(userFeedbackName: string) {
    return this.pathTemplates.userFeedbackPathTemplate.match(userFeedbackName).location;
  }

  /**
   * Parse the question from UserFeedback resource.
   *
   * @param {string} userFeedbackName
   *   A fully-qualified path representing UserFeedback resource.
   * @returns {string} A string representing the question.
   */
  matchQuestionFromUserFeedbackName(userFeedbackName: string) {
    return this.pathTemplates.userFeedbackPathTemplate.match(userFeedbackName).question;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.autoSuggestionServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
