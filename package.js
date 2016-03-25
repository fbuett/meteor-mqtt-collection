Package.describe({
  name: "fbuett:mqtt-collection",
  version: "1.0.6",
  summary: "IoT for Meteor - send/receive MQTT messages via collections",
  git: "https://github.com/fbuett/meteor-mqtt-collection.git",
  documentation: "README.md"
});

Npm.depends({
  "mqtt": "1.7.4"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.addFiles("lib/mqtt.js", "server");
  api.addFiles("lib/mqtt_collection.js", "server");
  api.export("mqtt");
});
