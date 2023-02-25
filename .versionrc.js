module.exports = {
    noVerify: true,
    commitAll: true,
    tagPrefix: '',
    scripts: {
        postbump: "npm run update-version",
        precommit: "git add package.json package-lock.json CHANGELOG.md src/_versions.ts"
    },
    bumpFiles: [
        {
            filename: 'package.json',
        },
        {
            filename: 'package-lock.json',
        },
    ]
}
