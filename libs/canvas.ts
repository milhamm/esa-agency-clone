export function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
) {
  const canvasAspect = ctx.canvas.width / ctx.canvas.height;
  const imgAspect = img.width / img.height;

  let drawWidth, drawHeight;

  if (imgAspect > canvasAspect) {
    drawWidth = ctx.canvas.height * imgAspect;
    drawHeight = ctx.canvas.height;
  } else {
    drawWidth = ctx.canvas.width;
    drawHeight = ctx.canvas.width / imgAspect;
  }

  const offsetX = (ctx.canvas.width - drawWidth) / 2;
  const offsetY = (ctx.canvas.height - drawHeight) / 2;

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}
