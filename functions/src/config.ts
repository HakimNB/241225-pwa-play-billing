/*
 *  Copyright 2021 Google LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * This file is so a user can set their desired constants for their account.
 */

// service account credentials
export const serviceAccountEmail = '83701981335-compute@developer.gserviceaccount.com';
export const serviceAccountPrivateKey =
  '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXNBfVELZKpKZF\nlapj3B4Xaz8rQJOnnWDypjjvCNfUVn6GRZnTpOXaaN2nTtviof05LmYPE5qsi4Ae\nq8UhC/QbEzVXB4o1IyddP9d9NtDnvZjxQtHKbfZ9iL7+KoRKPu5PMa6hKyJr2TSZ\nuLMCqGbpRemmRj/yr9gWUn+bPR6+9wkXTS54lxf9VAK88eBgwRuttR2fanUlHTGq\nMhuKjNi4mmRRKp1AD5sUpKz1GXaETu8vQosVVlELUh+uAUhKu+xTX36UYdcKI/Cf\nAB5s+d/p8I59WTZwhlUHqak4oXs590uhpbpFp065PXpiXWdD78Odww1iyENbcqGH\ny6EF8lzRAgMBAAECggEADfwzKXGL8CgoejksnbiR+Ufh0NtT4jtL6Jr38Hat7SWO\n5avHCEIGlzFUhxFj2c4dK3kfgXd7up0wiCW1Fv28YfYLMfXa561NCnKe43r6zuRv\nd/6JLvhaxc5XHrp0qqAFehe195GTc8w5nETuxxPSaPMezaf5FDZa0z262x3ycREo\njAFxDRpVuN1BGxF9EB1cBgRXHDlikjVuoRtGA09lMCDM2xBEHiTbGQPm6mwxFnxZ\ndFJ53Xy4zlVNf5+0Kx6TpECtX171olPCAx/5iWQ3glOaDO3E+d/rvJlwD4Tf9wan\nEx/P2gIwVRmPkpnAfj4uzaKGDY9FsjJNRJ4InQO2nQKBgQDQVvfK7PS9sMNuDYp9\n7pDBYUuPNDpyb/Qm1soll6HCVm7KPEqzjc24gjSuY2W2MREcpPHv6L4w75/I9Llh\nS37dRMlDWyYkD8UjjyB8Y+a9+5BnuYPYvGCxD3m7yHH2+kdqRaRR5YK8mUfpTdvh\nzLSvBZht/XgIBKSE+pjzb9j0uwKBgQC5ywwK4E7vx7AaBy4q+7VkyNBxlAFsLfzY\nfWyzJ40SGIuY55/TA6BraT8iWsf5JEKnTtcYUzZYNHC7AEsihjmFeGiF+Sb9qUuZ\nWJlCcpULU+0fPT7oymwLatr/fMmoxSTnEfn9aG7NI8ddLvjaSHqYqdkge7YLN2JX\nqqKrUVvh4wKBgFM2aUJj4lzhfS03u1kRMEAM3GEWO0H59UqN/6+EINe+LgIYkr2k\npcZMOz5r9PQQJQWL3BY2n8Br9SYOmPyDauh10O1WOqWsptDNGeyU+lRnZgYH0uF+\nXCBcTgLyzJIY5O1NY5RSVyV9E3vb3TcSzBgb5AYKdya8s/lpHi4dPkqBAoGBAK8Q\nG7DD2p0k01IzIdVuh2UHsyDSDOUaD/0Ncbb9tXcvmZnh5j62VBnheZOtZm/jMsrj\nBtnsznAeOXp6tFE7mEejRRm3wn2RX6KGUSLDRJz/35Zn5zcCRPwdG21Q79MOr87q\nqVuVY5H3/IpZEDLdyGbA484vw0CeVxOzvMMgTitxAoGBALuqhWqJpIbHIV8t94p3\nc7pUr/bMHyPWp8/d1ka8f1ANSSOCJjeMSGjo02hEizFmnC7zwJQW37pJbTzq2ISQ\nRZ+0+GwECowIepkVY3pMTvAuwpH9ehW3BAAHwoarrgsZ03lvvHKvNCrBvo8XN2Ta\nLbkMELyu20urpdiTJsHmLHyl\n-----END PRIVATE KEY-----\n';

// app package name
export const packageName = 'com.dynasty.pconlygame';

// RTDN pub/sub topic ID
export const topicID = 'teapot-billing';

// needed scopes
export const scopes: string[] = ['https://www.googleapis.com/auth/androidpublisher'];
