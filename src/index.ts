//get Terminal Colors from terminalColors.ts
import * as colors from "./utils/terminalColors.ts";
import { user, hostnameString, distroName, time, date, shell, kernelVersion, xsessionName } from "./utils/info.ts";

console.log(`${colors.blue + colors.bright} User:${colors.resetColor} ${user} ${colors.resetStyle + colors.reset}
${colors.blue + colors.bright} Hostname:${colors.resetColor} ${hostnameString} ${colors.resetStyle + colors.reset}
${colors.blue + colors.bright} Distro:${colors.resetColor} ${distroName} ${colors.resetStyle + colors.reset}
${colors.blue + colors.bright} Kernel:${colors.resetColor} ${kernelVersion} ${colors.resetStyle + colors.reset}
${colors.blue + colors.bright} WM/DE:${colors.resetColor} ${xsessionName} ${colors.resetStyle + colors.reset}
${colors.blue + colors.bright} Shell:${colors.resetColor} ${shell} ${colors.resetStyle + colors.reset}
${colors.blue + colors.bright} Time:${colors.resetColor} ${time} ${colors.resetStyle + colors.reset}
${colors.blue + colors.bright} Date:${colors.resetColor} ${date} ${colors.resetStyle + colors.reset}`);
