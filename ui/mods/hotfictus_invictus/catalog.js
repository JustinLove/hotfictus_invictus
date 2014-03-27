(function() {
  var ic = _.find(baseCatalog, function(c) {
    return c.ObjectName == 'InvictusCommander'
  })
  if (!ic) return

  ic.ImgSource = ic.ImgSource.replace('delta', 'invictus')
  ic.ProfileImgSource = ic.ProfileImgSource.replace('delta', 'invictus')
  ic.ThumbImgSource = ic.ThumbImgSource.replace('delta', 'invictus')
})()
