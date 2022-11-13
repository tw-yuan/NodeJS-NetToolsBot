# NodeJS-NetToolsBot

This is an Discord BOT for test network.

## Installation (Ubuntu)

Use NodeJS and npm to install.

```bash
#Install Nodejs 18 and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && apt-get install -y nodejs && npm install -g npm@8.15.0 

#Clone repository and install
git clone https://github.com/yuan2005/NodeJS-NetToolsBot.git
cd NodeJS-NetToolsBot
npm i

#run bot
node index.js
```

## Usage

```bash
cp config.json.exp config.json
nano config.json
# change token to your discord bot token.
# change nodename to the server name as you want.
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
