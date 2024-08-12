export function VideoBackground() {
  return (
    <div className="video-banner absolute inset-0 -top-24">
      <div className="sticky top-0 min-h-screen">
        <video
          poster="/assets/images/covers/lord-of-the-rings.jpg"
          autoPlay
          muted
          loop
          className="min-h-screen w-full bg-gray-200 object-cover object-center"
        >
          <source
            src="https://musicc.storage.iran.liara.space/videos/hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
