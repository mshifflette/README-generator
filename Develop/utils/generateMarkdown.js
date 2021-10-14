// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
  if (data.license === licenses[0]){
    let badge = license[0].badge;
}else if(data.license === licenses[1]){
    let badge = license[1].badge;
}else if(data.license === licenses[2]){
  let badge = license[2].badge;
}else {
  let badge = license[3].badge;
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
