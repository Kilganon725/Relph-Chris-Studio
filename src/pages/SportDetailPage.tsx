import { useEffect } from 'react';
import { sportDetailsConfig, siteConfig } from '../config';

interface SportDetailPageProps {
  slug: string;
}

const SportDetailPage = ({ slug }: SportDetailPageProps) => {
  const detail = sportDetailsConfig.find((item) => item.slug === slug);

  useEffect(() => {
    if (detail) {
      document.title = `${detail.title} | ${siteConfig.title}`;
    } else {
      document.title = siteConfig.title;
    }
  }, [detail]);

  if (!detail) {
    return (
      <main className="min-h-screen bg-[#050505] text-white px-8 py-20 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="museo-label text-white/50 mb-4">Not Found</p>
          <h1 className="museo-headline text-4xl md:text-6xl mb-6">页面不存在</h1>
          <a
            href="/"
            data-cursor="hover"
            className="inline-block museo-label border border-white/30 px-8 py-3 hover:bg-white hover:text-[#050505] transition-colors duration-300"
          >
            返回首页
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="px-8 py-20 lg:px-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <a
            href="/"
            data-cursor="hover"
            className="inline-block museo-label text-white/60 hover:text-white mb-10"
          >
            ← 返回首页
          </a>
          <p className="museo-label text-white/50 mb-4">{detail.period}</p>
          <h1 className="museo-headline text-4xl md:text-6xl lg:text-7xl mb-8">{detail.title}</h1>
          <p className="museo-body text-white/80 text-lg max-w-4xl">{detail.description}</p>
        </div>
      </section>

      <section className="px-8 py-16 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {detail.gallery.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="overflow-hidden border border-white/10">
              <img src={image.src} alt={image.alt} className="w-full h-[320px] md:h-[420px] object-cover" />
              <figcaption className="museo-label text-white/60 px-4 py-3 border-t border-white/10">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {detail.videos && detail.videos.length > 0 && (
        <section className="px-8 pb-16 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="museo-headline text-white text-3xl mb-8">视频记录</h2>
            <div className="grid grid-cols-1 gap-6">
              {detail.videos.map((video, index) => (
                <figure key={`${video.src}-${index}`} className="border border-white/10 overflow-hidden">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full max-h-[72vh] bg-black"
                  />
                  <figcaption className="px-4 py-4 border-t border-white/10">
                    <p className="museo-headline text-white text-lg mb-1">{video.title}</p>
                    <p className="museo-body text-white/65 text-sm">{video.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default SportDetailPage;
