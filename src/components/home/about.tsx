const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.026 2C6.517 2 2.052 6.465 2.052 11.974c0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2Z"
      />
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM8.339 18.337H5.667v-8.59h2.672v8.59ZM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096Zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71Z" />
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25h6.825l4.713 6.231 5.452-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    ),
  },
  {
    name: 'Email',
    href: '#contact',
    icon: (
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7.2L4.6 7H4v.7l8 5.6 8-5.6V7h-.6L12 12.2Z" />
    ),
  },
]

const About = () => {
  return (
    <section id="about" className="bg-white py-12 md:py-20 text-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 xl:flex-row">
          <div className="w-full xl:max-w-2xl text-center xl:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              About me
            </p>
            <h2 className="mb-6 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A4646] xl:leading-[3.55rem]">
              Software developer building clean, useful web experiences
            </h2>
            <p className="max-w-xl mx-auto xl:mx-0 text-base leading-8 text-slate-600">
              As a Computer Science student, I bridge academic theory with practical application to build clean, impactful web experiences. I have worked with HTML, CSS, JavaScript, React, and PHP, and I am currently expanding my skills in Python and PostgreSQL. I enjoy building practical projects and improving my skills every day as I work toward becoming a full-stack developer focused on solving real-world problems through technology.
            </p>

            <ul className="my-10 flex flex-wrap justify-center xl:justify-start items-center gap-x-5 gap-y-4">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-2 border-b border-slate-200 pb-1 text-sm font-medium text-slate-700 transition hover:border-emerald-600 hover:text-[#0A4646]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 flex-shrink-0 fill-current text-slate-400 transition group-hover:text-emerald-700"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-md self-center opacity-90 xl:max-w-[450px]">
            <svg viewBox="0 0 1273 906" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
              <path
                d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
                stroke="url(#about-lines)"
                strokeOpacity="0.65"
                strokeWidth="2"
              />
              {[['159', '586'], ['159', '393'], ['793', '551'], ['1113', '551'], ['1113', '398'], ['793', '237']].map(
                ([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#27B173" />
                ),
              )}
              <defs>
                <linearGradient id="about-lines" x1="1272.23" y1="479.474" x2="506.242" y2="-216.277" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#27B173" />
                  <stop offset="0.62" stopColor="#1A663F" />
                  <stop offset="0.93" stopColor="#26312D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
