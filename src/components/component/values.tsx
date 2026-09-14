import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Values() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At the heart of our company are the values that guide our actions
            and decisions.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
              <div className="h-8 w-7 font-bold text-xl"> F</div>
            </div>
            <h3 className="text-xl font-semibold">Faithful</h3>
            <p className="text-muted-foreground text-center">
              We are passionate and dedicated to making a difference, driven by
              our commitment to our cause.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
              <div className="h-8 w-7 font-bold text-xl">I</div>
            </div>
            <h3 className="text-xl font-semibold">Influential</h3>
            <p className="text-muted-foreground text-center">
              We ignite change and motivate others through our innovative
              approaches and solutions.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
            <div className="h-8 w-7 font-bold text-xl">E</div>
            </div>
            <h3 className="text-xl font-semibold">Effective</h3>
            <p className="text-muted-foreground text-center">
              {" "}
              We believe in lifting others, empowering them to overcome their
              challenges and reach their full potential.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
            <div className="h-8 w-7 font-bold text-xl">R</div>
            </div>
            <h3 className="text-xl font-semibold">Reliable</h3>
            <p className="text-muted-foreground text-center">
              We are unwavering in the face of adversity, standing strong and
              united with our clients.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full p-3 text-primary-foreground">
            <div className="h-8 w-7 font-bold text-xl">Y</div>
            </div>
            <h3 className="text-xl font-semibold">Yielding</h3>
            <p className="text-muted-foreground text-center">
              We are focused on productive outcomes, ensuring that our efforts
              produce meaningful and lasting results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
