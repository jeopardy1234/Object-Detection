export const DrawRectangle = (detections, ctx) => {
    detections.forEach((prediction) => {
        const [x, y, width, height] = prediction["bbox"];
        const text = prediction["class"];
        const color = "green";
        ctx.strokeStyle = color;
        ctx.font = "18px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(text, x, y);
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
    }