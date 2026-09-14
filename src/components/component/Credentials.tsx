export function Credentials() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
      <div className="container grid max-w-4xl items-center justify-center gap-8 px-1 md:px-6 ">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Credentials
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
           
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <BadgeIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">PBO Approved</h3>
                <p className="text-muted-foreground">
               IOC recovery is approved for PBO Number:
                </p>{" "}
                <div className="font-extrabold  text-lg text-black">
                930076307
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <CopyrightIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Registered NPO</h3>
                <p className="text-muted-foreground">
                  Our team is registered to practice.
                </p>{" "}
                <div className="font-extrabold  text-lg text-black">
                  250-556 NPO
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3  text-primary-foreground">
                <PlayIcon className="h-6 w-6 " />
              </div>
              <div>
                <h3 className="text-lg font-medium">Experience</h3>
                <p className="text-muted-foreground">
                  We have been changing lives since 2020
                </p>
                <div className="font-extrabold  text-lg text-center">
                  4+ years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function CopyrightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
