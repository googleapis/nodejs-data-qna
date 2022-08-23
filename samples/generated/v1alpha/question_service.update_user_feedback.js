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



'use strict';

function main(userFeedback) {
  // [START dataqna_v1alpha_generated_QuestionService_UpdateUserFeedback_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The user feedback to update. This can be called even if there is no
   *  user feedback so far.
   *  The feedback's name field is used to identify the user feedback (and the
   *  corresponding question) to update.
   */
  // const userFeedback = {}
  /**
   *  The list of fields to be updated.
   */
  // const updateMask = {}

  // Imports the Dataqna library
  const {QuestionServiceClient} = require('@google-cloud/data-qna').v1alpha;

  // Instantiates a client
  const dataqnaClient = new QuestionServiceClient();

  async function callUpdateUserFeedback() {
    // Construct request
    const request = {
      userFeedback,
    };

    // Run request
    const response = await dataqnaClient.updateUserFeedback(request);
    console.log(response);
  }

  callUpdateUserFeedback();
  // [END dataqna_v1alpha_generated_QuestionService_UpdateUserFeedback_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
