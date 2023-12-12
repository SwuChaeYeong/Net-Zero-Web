//프로필 이미지 변경
$(document).ready(function(){
    var profileImage = document.querySelector(".profileCircle")

    profileImage.onclick = function(){
        profileImage.setAttribute('src', prompt("이미지 url 입력"))
    }
})

$(document).ready(function(){
    var option = document.querySelector("#id i")
    var name = document.querySelector("#id h2")

    option.onclick = function(){
        name.innerHTML = prompt("새 아이디 입력")
    }
})

$(document).ready(function(){
    var profileEditBtn = document.querySelector("button")
    var userInfo = document.querySelector("#userInfo")
    var detail = document.querySelector("#detail")
    var adress = document.querySelector("#adress")

    var complete = false;

    profileEditBtn.onclick = function(){
        if(complete){
            //input 태그에 작성된 내용 저장
            var _userInfo = userInfo.querySelector("input").value
            var _detail = detail.querySelector("input").value
            var _adress = adress.querySelector("input").value

            //해당 내용으로 설정
            userInfo.innerHTML = _userInfo
            detail.innerHTML = _detail

            if(_adress.startsWith("http")){
                _adress = "<a href=" + _adress + ">" + _adress + "</a>"
            }

            adress.innerHTML = _adress

            //다시 프로필 편집 버튼으로 바꿈
            profileEditBtn.textContent = "프로필 편집"

            //미완료 상태로
            complete = false

        } else {
            //현재 내용 저장
            //여기서는 텍스트를 다 읽어오는데
            var _userInfo = userInfo.textContent
            var _detail = detail.textContent
            var _adress = adress.textContent
            
            _adress=_adress.trim()

            //value로 넣으면 띄어쓰기 이후를 안읽어옴
            //따옴표로 묶어서 해결

            //a 태그는 해결 안됨 -> _adress 앞뒤로 공백 있음 따옴표로 묶어주면서 문제 발생
            //trim 함수로 공백 제거
            _adress=_adress.trim()

            //input 태그로 바꾸고, 현재 값 value로
            userInfo.innerHTML = "<input value='" + _userInfo + "'></input>"
            detail.innerHTML = "<input value='" + _detail + "'></input>"
            adress.innerHTML = "<input value='" + _adress + "'></input>"

            //프로필 편집 버튼 프로필 편집 완료로
            profileEditBtn.textContent = "프로필 편집 완료"

            //편집 완료로 설정
            complete = true
        }
    }
})