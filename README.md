# Lab 5 - Jonathan Kook
[Expose](/expose.html)
[Explore](/explore.html)
1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. <br>
`No, I would not use a unit test to test the "message" feature of a messaging application. Though I would use unit tests to test individual messaging features such as max message length, the entire "message" feature is too broad to be tested with a single unit test. Unit tests should be used to test and debug on a small scale without many moving parts.`
2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. <br>
`Yes, I would use a unit test to test the "max message length" feature of a messaging application. This is a feature that is easy to fix or implement, and it doesn't require interactions with other components on an application/feature level. It executes quickly, and changing other app features won't affect the non-related unit tests.`
