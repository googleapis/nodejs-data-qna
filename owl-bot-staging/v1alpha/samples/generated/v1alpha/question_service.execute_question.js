// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name, interpretationIndex) {
  // [START dataqna_execute_question_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The unique identifier for the question.
   *  Example: `projects/foo/locations/bar/questions/1234`
   */
  // const name = 'abc123'
  /**
   *  Required. Index of the interpretation to execute.
   */
  // const interpretationIndex = 1234

  // Imports the Dataqna library
  const {QuestionServiceClient} = require('@google-cloud/data-qna').v1alpha;

  // Instantiates a client
  const dataqnaClient = new QuestionServiceClient();

  async function executeQuestion() {
    // Construct request
    const request = {
      name,
      interpretationIndex,
    };

    // Run request
    const response = await dataqnaClient.executeQuestion(request);
    console.log(response);
  }

  executeQuestion();
  // [END dataqna_execute_question_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
