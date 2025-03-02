// Prevents the notion image from getting too big in comparison to the react-notion-x frame
// on larger screens like presentations
document.addEventListener('astro:page-load', () => {
    document.querySelectorAll('.notion-frame').forEach(frame => {
        let imageOfNotion = document.getElementById('image-of-notion');
        console.log(frame?.clientHeight, imageOfNotion?.clientHeight);
        if (frame?.clientHeight ?? 0 < (imageOfNotion?.clientHeight || 0)) {
            imageOfNotion?.setAttribute('style', `height:${frame.clientHeight}px !important;`);
        }
    });
});