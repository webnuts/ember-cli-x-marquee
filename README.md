# ember-cli-x-marquee

Plugin for ember-cli that makes x-marquee component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-cli-x-marquee.git --save-dev
ember g ember-cli-x-marquee
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{{#x-marquee duration=15000 pauseOnHover=true duplicated=true}}
  <ul>
    {{#each messages as |message|}}
      <li>{{message}}</li>
    {{/each}}
  </ul>
{{/x-marquee}}
```

## Configuration

The plugin currently supports the following attributes:

* duration
* gap
* delayBeforeStart
* direction
* duplicated
* pauseOnHover

You can find the documentation for jQuery.Marquee here: https://github.com/aamirafridi/jQuery.Marquee