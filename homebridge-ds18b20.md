---
title: homebridge-ds18b20
permalink: homebridge-ds18b20/
description: This is a plugin for homebridge that enables it to use DS18B20 temperature sensors.
tagline: A temperature sensor plugin for homebridge
type: project
github-link: https://github.com/DanTheMan827/homebridge-ds18b20
ads: [bottom]
---
# homebridge-ds18b20
This is a plugin for the DS18B20 temperature sensors.

Sample Configuration
--------------------
    {
      "bridge": {
        "name": "HomeBridge",
        "username": "CC:22:3D:E3:CE:30",
        "port": 51826,
        "pin": "031-45-154"
      },
    
      "description": "",
    
      "accessories": [
        {
          "accessory": "DS18B20",
          "name": "Temperature Sensor",
          "device": "28-0000063f4ead"
        }
      ],
    
      "platforms": []
    }
