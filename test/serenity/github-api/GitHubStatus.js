import { Ensure, equals } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { GetRequest, LastResponse, Send } from '@serenity-js/rest'

/**
 * Learn more about API testing with Serenity/JS
 *  https://serenity-js.org/handbook/api-testing/
 */
export class GitHubStatus {
    static #baseApiUrl = 'https://www.githubstatus.com/api/v2/'
    static #statusJson = this.#baseApiUrl + 'status.json'

    static ensureAllSystemsOperational = () =>
    //Tasks offer an easy way to associate business meaning with
    //sequences of activities and turn them into reusable building blocks.
        Task.where(`#actor ensures all GitHub systems are operational`,
            // Interaction
            Send.a(GetRequest.to(this.#statusJson)),
            // Questions
            Ensure.that(LastResponse.status(), equals(200)),
            Ensure.that(
                LastResponse.body().status.description.describedAs('GitHub Status'),
                equals('All Systems Operational')
            ),
        )
}
