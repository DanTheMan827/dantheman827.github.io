---
title: Troubleshooting
permalink: ios-app-signer/troubleshooting/
ads: [bottom]
type: project-tab
group: ios-app-signer
---
# Troubleshooting

## "No signing certificate found"

* Open Keychain Access which is located in the Utilities folder inside Applications.
* Select 'Show Expired Certificates' in the View menu.
* Delete the expired version of the Apple Worldwide Developer Relations Certificate Authority Intermediate certificate from both the login and system keychains.
* Download and install the [renewed Apple WWDR certificate](https://developer.apple.com/certificationauthority/AppleWWDRCA.cer).

## "This app contains an app extension with an illegal bundle identifier"

Install the latest version of iOS App Signer.