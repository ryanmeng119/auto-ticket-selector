var grab = function () {
  console.log('run script')
  // const fourPeopleRoom = document.getElementsByName('num[90]')[0]
  const twoPeopleRoom = document.getElementsByName('num[15]')[0]
  const greenRoom = document.getElementsByName('num[13]')[0]
  const redRoom = document.getElementsByName('num[11]')[0]
  const twoPeopleRoomAmount = document.querySelector('#coupons4').previousElementSibling.children[5].innerHTML
  console.log(twoPeopleRoomAmount)
  const greenRoomAmount = document.querySelector('#coupons2').previousElementSibling.children[5].innerHTML
  console.log(greenRoomAmount)
  const redRoomAmount = document.querySelector('#coupons0').previousElementSibling.children[5].innerHTML
  console.log(redRoomAmount)
  // const skiRoom = document.getElementsByName('num[212]')[0]
  // const skiRoomAmount = document.querySelector('#coupons_area_134').nextElementSibling.children[5].innerHTML
  // const viewRoomAmount = document.querySelector('#coupons_area_90').nextElementSibling.children[5].innerHTML
  // const button = document.querySelectorAll('#button_roomsubmit')[0]
  
  
  
  if (Number(twoPeopleRoomAmount) > 1) {
    twoPeopleRoom.value = 1
  } else if (Number(greenRoomAmount) > 1) {
    greenRoom.value = 1
  } else if (Number(redRoomAmount) > 1) {
    redRoom.value = 1
  } else {
    console.log("慢了一步")
    return
  }
  // button.click()
  // window.scrollTo(0, document.body.scrollHeight)
  setTimeout(() => {
    document.getElementById('login-form-verify').focus()
  }, 1100)
}

grab()