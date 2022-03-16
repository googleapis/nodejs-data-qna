// Copyright 2022 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as questionserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1alpha.QuestionServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      questionserviceModule.v1alpha.QuestionServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      questionserviceModule.v1alpha.QuestionServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = questionserviceModule.v1alpha.QuestionServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new questionserviceModule.v1alpha.QuestionServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new questionserviceModule.v1alpha.QuestionServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new questionserviceModule.v1alpha.QuestionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.questionServiceStub, undefined);
    await client.initialize();
    assert(client.questionServiceStub);
  });

  it('has close method for the initialized client', done => {
    const client = new questionserviceModule.v1alpha.QuestionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    assert(client.questionServiceStub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client = new questionserviceModule.v1alpha.QuestionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.questionServiceStub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new questionserviceModule.v1alpha.QuestionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new questionserviceModule.v1alpha.QuestionServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('getQuestion', () => {
    it('invokes getQuestion without error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetQuestionRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.Question()
      );
      client.innerApiCalls.getQuestion = stubSimpleCall(expectedResponse);
      const [response] = await client.getQuestion(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getQuestion without error using callback', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetQuestionRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.Question()
      );
      client.innerApiCalls.getQuestion =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getQuestion(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.dataqna.v1alpha.IQuestion | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getQuestion with error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetQuestionRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getQuestion = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getQuestion(request), expectedError);
      assert(
        (client.innerApiCalls.getQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getQuestion with closed client', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetQuestionRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getQuestion(request), expectedError);
    });
  });

  describe('createQuestion', () => {
    it('invokes createQuestion without error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.CreateQuestionRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.Question()
      );
      client.innerApiCalls.createQuestion = stubSimpleCall(expectedResponse);
      const [response] = await client.createQuestion(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createQuestion without error using callback', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.CreateQuestionRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.Question()
      );
      client.innerApiCalls.createQuestion =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createQuestion(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.dataqna.v1alpha.IQuestion | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createQuestion with error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.CreateQuestionRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createQuestion = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createQuestion(request), expectedError);
      assert(
        (client.innerApiCalls.createQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createQuestion with closed client', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.CreateQuestionRequest()
      );
      request.parent = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.createQuestion(request), expectedError);
    });
  });

  describe('executeQuestion', () => {
    it('invokes executeQuestion without error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.ExecuteQuestionRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.Question()
      );
      client.innerApiCalls.executeQuestion = stubSimpleCall(expectedResponse);
      const [response] = await client.executeQuestion(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.executeQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes executeQuestion without error using callback', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.ExecuteQuestionRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.Question()
      );
      client.innerApiCalls.executeQuestion =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.executeQuestion(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.dataqna.v1alpha.IQuestion | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.executeQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes executeQuestion with error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.ExecuteQuestionRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.executeQuestion = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.executeQuestion(request), expectedError);
      assert(
        (client.innerApiCalls.executeQuestion as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes executeQuestion with closed client', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.ExecuteQuestionRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.executeQuestion(request), expectedError);
    });
  });

  describe('getUserFeedback', () => {
    it('invokes getUserFeedback without error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetUserFeedbackRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UserFeedback()
      );
      client.innerApiCalls.getUserFeedback = stubSimpleCall(expectedResponse);
      const [response] = await client.getUserFeedback(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getUserFeedback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getUserFeedback without error using callback', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetUserFeedbackRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UserFeedback()
      );
      client.innerApiCalls.getUserFeedback =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getUserFeedback(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.dataqna.v1alpha.IUserFeedback | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getUserFeedback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getUserFeedback with error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetUserFeedbackRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getUserFeedback = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getUserFeedback(request), expectedError);
      assert(
        (client.innerApiCalls.getUserFeedback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getUserFeedback with closed client', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.GetUserFeedbackRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getUserFeedback(request), expectedError);
    });
  });

  describe('updateUserFeedback', () => {
    it('invokes updateUserFeedback without error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest()
      );
      request.userFeedback = {};
      request.userFeedback.name = '';
      const expectedHeaderRequestParams = 'user_feedback.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UserFeedback()
      );
      client.innerApiCalls.updateUserFeedback =
        stubSimpleCall(expectedResponse);
      const [response] = await client.updateUserFeedback(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateUserFeedback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes updateUserFeedback without error using callback', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest()
      );
      request.userFeedback = {};
      request.userFeedback.name = '';
      const expectedHeaderRequestParams = 'user_feedback.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UserFeedback()
      );
      client.innerApiCalls.updateUserFeedback =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.updateUserFeedback(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.dataqna.v1alpha.IUserFeedback | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateUserFeedback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes updateUserFeedback with error', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest()
      );
      request.userFeedback = {};
      request.userFeedback.name = '';
      const expectedHeaderRequestParams = 'user_feedback.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.updateUserFeedback = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.updateUserFeedback(request), expectedError);
      assert(
        (client.innerApiCalls.updateUserFeedback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes updateUserFeedback with closed client', async () => {
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest()
      );
      request.userFeedback = {};
      request.userFeedback.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.updateUserFeedback(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('location', () => {
      const fakePath = '/rendered/path/location';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
      };
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.locationPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.locationPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('locationPath', () => {
        const result = client.locationPath('projectValue', 'locationValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.locationPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromLocationName', () => {
        const result = client.matchProjectFromLocationName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromLocationName', () => {
        const result = client.matchLocationFromLocationName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('question', () => {
      const fakePath = '/rendered/path/question';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        question: 'questionValue',
      };
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.questionPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.questionPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('questionPath', () => {
        const result = client.questionPath(
          'projectValue',
          'locationValue',
          'questionValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.questionPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromQuestionName', () => {
        const result = client.matchProjectFromQuestionName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.questionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromQuestionName', () => {
        const result = client.matchLocationFromQuestionName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.questionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchQuestionFromQuestionName', () => {
        const result = client.matchQuestionFromQuestionName(fakePath);
        assert.strictEqual(result, 'questionValue');
        assert(
          (client.pathTemplates.questionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('userFeedback', () => {
      const fakePath = '/rendered/path/userFeedback';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        question: 'questionValue',
      };
      const client = new questionserviceModule.v1alpha.QuestionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.userFeedbackPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.userFeedbackPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('userFeedbackPath', () => {
        const result = client.userFeedbackPath(
          'projectValue',
          'locationValue',
          'questionValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromUserFeedbackName', () => {
        const result = client.matchProjectFromUserFeedbackName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromUserFeedbackName', () => {
        const result = client.matchLocationFromUserFeedbackName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchQuestionFromUserFeedbackName', () => {
        const result = client.matchQuestionFromUserFeedbackName(fakePath);
        assert.strictEqual(result, 'questionValue');
        assert(
          (client.pathTemplates.userFeedbackPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
