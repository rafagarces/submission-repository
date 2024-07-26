# 0.4: New note diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: User submits a new note

    server-->>browser:  HTTP status code 302.
    deactivate server
    Note left of server: The server responds with a URL redirect.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    Note right of browser: Browser sends a GET request.

    server-->>browser:  HTML code with /notes
    deactivate server
    Note left of server: Page refreshes

    browser->>server: GET main.css
    activate server
    server-->>browser:  main.css
    deactivate server

    browser->>server: GET main.js
    activate server
    server-->>browser:  main.js
    deactivate server

    browser->>server: GET data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
    Note left of server: Returns an updated version of the JSON data

    Note right of browser: The browser executes the callback function that renders the notes
```

# 0.5: Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    Note right of browser: The user accesses the single page app.
    server-->>browser:  Server provides HTML file
    deactivate server

    Note right of browser: Parses HTML an requests the required resources
    browser->>server: GET main.css
    activate server
    server-->>browser:  main.css
    deactivate server

    browser->>server: GET spa.js
    activate server
    server-->>browser:  spa.js
    deactivate server

    Note right of browser: The browser runs spa.js and finds out it needs to get the json data.
    browser->>server: GET data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
    Note left of server: Returns an updated version of the JSON data

    Note right of browser: The browser executes the callback function that renders the notes
```

# 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User submits a new note
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    server-->>browser: HTTP 201 created
    deactivate server
```
