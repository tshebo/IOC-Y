import { Button } from "@/components/ui/button";

function SlideContent({ title, description, buttonText, buttonLink }) {
  return (
    <div className="p-4 text-center">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      <Button as="a" href={buttonLink} className="mt-4">
        {buttonText}
      </Button>
    </div>
  );
}

export default SlideContent;
