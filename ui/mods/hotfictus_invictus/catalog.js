(function() {
  var ic = _.find(baseCatalog, function(c) {
    return c.ObjectName == 'InvictusCommander'
  })
  if (!ic) return

  ic.ImgSource = 'coui://ui/main/shared/img/commanders/img_imperial_invictus.png',
  ic.ProfileImgSource = 'coui://ui/main/shared/img/commanders/profiles/profile_imperial_invictus.png',
  ic.ThumbImgSource = 'coui://ui/main/shared/img/commanders/thumbs/img_imperial_invictus_thumb.png'
})()
