
//Fetch the current user
const user = Deno.env.get("HOME")?.substring(6);
//Fetch the hostname
const hostname = await Deno.run({
    cmd: ["cat", "/etc/hostname"],
    stdout: "piped"
}).output();
const hostnameString = new TextDecoder().decode(hostname).trim();
//Fetch linux distribution using a bash command and the exec function
const distro = Deno.run({
    cmd: ["bash", "-c", "cat /etc/os-release | grep PRETTY_NAME | cut -d '=' -f 2"],
    stdout: "piped"
});
const distroName = new TextDecoder().decode(await distro.output()).replace(/"/g, "").trim();
distro.close();
//Fetch the current time
const time = new Date().toLocaleTimeString();
//Fetch the current date
const date = new Date().toLocaleDateString();
//Fetch the current user's shell
const shell = Deno.env.get("SHELL")?.substring(9);
//get current kernel version with uname
const kernel = Deno.run({
    cmd: ["bash", "-c", "uname -r"],
    stdout: "piped"
});
const kernelVersion = new TextDecoder().decode(await kernel.output()).trim();
//fetch current xsession
const xsession = Deno.run({
    cmd: ["bash", "-c", "echo $XDG_SESSION_DESKTOP"],
    stdout: "piped"
});
const xsessionName = new TextDecoder().decode(await xsession.output()).trim();

export { user, hostnameString, distroName, time, date, shell, kernelVersion, xsessionName };