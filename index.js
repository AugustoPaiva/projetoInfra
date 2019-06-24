const cmd = require("node-command-line");
var express = require("express");
var app = express();

app.post("/", async function(req, res) {
  console.log(req.body);
});

app.listen(process.env.PORT || 3001);

async function createVm(name, memory, cpu) {
  try {
    await cmd.run(`VBoxManage clonevm projetoInfra --name ${name} --register`);
    await cmd.run(
      `VBoxManage modifyvm "${name}" --memory "${memory}" --cpus "${cpu}"`
    );
  } catch (erro) {
    console.log(erro.message);
  }
}
