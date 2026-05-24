// 32 - select the DOM element with the id "app" and assign it to a variable
// it will be used to render the app's state
const app = document.querySelector("#app");

// 33 - the function updates the state of the "app" element 
// to reflect the current state
export function renderState(state) {
    // 34 - uses a switch to handle different states and updates the UI
    switch (state) {
        case "loading":
            // 34.1 - displays loading when app is fetching data
            app.innerHTML = "Loading...";
            break;

        case "success":
            // 34.2 - displays success when the operation completes successfully
            app.innerHTML = "Success!";
            break;

        case "error":
            // 34.3 - displays erro when something goes wrong
            app.innerHTML = "Something went wrong";
            break;

        // 34.4 - no default case included, handled state will not update the UI
    }
}