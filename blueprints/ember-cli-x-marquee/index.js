module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('git@github.com:aamirafridi/jQuery.Marquee.git');
  }
}