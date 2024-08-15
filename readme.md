# Simple Hardware Stats Server
WIP: A simple server for serving up hardware stats + presenting a realtime web page to access those stats over the wire. Uses the `systeminformation` package under the hood.

## Requirements
- Node v22.6.0 or higher (required for experimental, no-build TS support; may transpile in future to support lower versions)

### Optional
- Volta (for automatic Node version switching)

## Getting Started
- Ensure you have the requirements from the Requirements section
- Run `npm ci` to install necessary packages
- Run `npm start`
- Visit `http://localhost:3000/stats/raw`

## TODO:
- [ ] Create a /stats/formatted endpoint
- [ ] Create dashboard page with charts
- [ ] Use WebSockets to avoid polling
- [ ] Use `pkg` to generate a portable binary
