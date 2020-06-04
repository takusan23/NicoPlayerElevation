
// box-shadow の値
const boxShadowValue = '2px 4px 10px 5px rgba(0,0,0,0.4)'

window.onload = () => {
    // ニコ生
    if (document.getElementsByClassName('___leo-player___Rvz7R ___ga-ns-leo-player___2kDQ5')[0] !== undefined) {
        // プレイヤー
        const nicoLivePlayer = document.getElementsByClassName('___leo-player___Rvz7R ___ga-ns-leo-player___2kDQ5')[0]
        // 影つける
        nicoLivePlayer.style.boxShadow = boxShadowValue
    }
    // ニコ動
    if (document.getElementsByClassName('MainContainer')[0] !== undefined) {
        // プレイヤー
        const nicoVideoPlayer = document.getElementsByClassName('MainContainer')[0]
        // 影つける
        nicoVideoPlayer.style.boxShadow = boxShadowValue
    }
}