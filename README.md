# WebApp
A minimal electron app that opens a separate browser window for viewing Jupiter Lab/Notebook or Theia. 
It can also display the appropriate icon. WebApp prevents you from having to run your web-based IDE in your main browser alongside other tabs.
This prevents you from losing your IDE in your browser and facilitates alt-tabbing between native applications and your web-based IDE.

WebApp responds to the following environmental variables on start:
- `URL` - if set, then WebApp will open this url.
- `SERVER` - if set to "jupyter" then WebApp will use a Jupyter icon, if set to "theia" then WebApp will use a Theia icon.

## Linking to cjr

WebApp was primarily intended to work in conjuction with [cjr](https://github.com/container-job-runner/cjr) (container job runner) for starting Theia and Jupyter IDEs.
To link WebApp eith cjr, download the latest release and run the following command:
```console
$ cjr config:set --on-server-start="open -n $PATH_TO_WEBAPP"              (MAC)
$ cjr config:set --on-server-start="./$PATH_TO_WEBAPP"                    (LINUX)
```
The commands `cjr jupyter:start` and `cjr theia:start` will now open a new WebApp window. 

**Note:** WebApp is not a signed app. On mac you will first need to authorize the app by right clicking on the downloaded file, selecting open, and then clicking open in the system dialog. Alternatively you can also build WebApp from source.

## Building From Source (Mac and Linux)

Clone repository and run the following command in the repository directory:

```bash
npm install
npm run package-mac
npm run package-linux
```
