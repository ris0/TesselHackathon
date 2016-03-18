Install NVM:
1st, make certain your bash profile is setup:
touch ~/.bash_profile

Then.. run the install script. Copy and paste this in terminal
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

Then.. install a later version of Node
nvm install 0.12.x (x = version, 0.12 should work)

Debugging the WIFI....
- tessel wifi -d (disconnect)
- power cycle
- tessel wifi -d (disconnect)
- tessel wifi -l (list wifi networks)
- tessel erase (clear the tessel);

Start instructions:
Install the command line interface:
npm install -g http://s3.amazonaws.com/builds.tessel.io/cli/tessel-cli-current.tar.gz

Tessel 1 Docs:
https://github.com/tessel/t1-docs

Connect Tessel to WiFi:
https://github.com/tessel/t1-docs/blob/master/wifi.md

Commands:
tessel <filename>
tessel list
tessel logs
tessel push <filename> [options]
tessel repl
tessel wifi -n <ssid> -p <password> [-s <security (wep/wpa/wpa2 by default)>]
tessel wifi -n <ssid>
tessel wifi -l (lower case L)
tessel wifi -d (disconnect)
tessel pack <filename>
tessel check <filename>
tessel blink

Options:
-a, --args Arguments to passin as process.argv
-q, --quiet [Tessel] Hide tessel deployment messages
-m, --messages [Tessel] Forward stdin as child process messages
-l, --logs [Tessel] Stay connected and print logs
-s, --single [Tessel] Push a single script file to Tessel
-h, --help Show usage for tessel push
-u --upload-dir Directory where uploads from process.sendfile should be saved

Deploying

When a host computer deploys code to Tessel (either via the run or push command), the host computer bundles up the entire "project directory" and sends it to the Tessel. The CLI must wrap up all the dependencies (node_modules and subfolders) before sending the project over because the Tessel has no mechanism for fetching them from the host computer once the script has initiated on Tessel. The CLI defines the root of a "project directory" as the highest level folder that contains a node_modules folder or a package.json (note: if you pass the -s flag, only a single file is sent). This means that when tessel run or tessel push is called, the CLI will traverse up the directory tree until it finds a folder that matches that criteria. It will not bundle the home folder of a filesystem because it's probably greater than the 32MB available on Tessel.

If you're having trouble figuring out which files are being sent to Tessel, use the tessel pack command.

Remember to npm install to get all of the node_modules listed in the package.json_

Hardware:
Tessel

Modules:
Camera
Servo
Servo Motor
Accelerometer
Ambient Sensor

Team manager:
Sam Ballan

Team members:
Dane Tomseth
Haily Keen
Laura Weiner
Matthew Starr
Richard Song

Tessel repo:
https://github.com/tessel/t1-docs


Servo library:
npm install servo-pca9685
https://github.com/tessel/servo-pca9685

Accelerometer library:
npm install accel-mma84
https://github.com/tessel/accel-mma84

Ambient sensor library:
npm install ambient-attx4
https://github.com/tessel/ambient-attx4

Camera library:
npm install camera-vc0706
https://github.com/tessel/camera-vc0706


