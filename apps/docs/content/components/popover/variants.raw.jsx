import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";

export default function App() {
  const content = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    </PopoverContent>
  );

  const variants = ["solid", "bordered", "flat", "faded", "shadow"];

  return (
    <div className="flex gap-2">
      {variants.map((variant) => (
        <Popover key={variant} placement="top" variant={variant}>
          <PopoverTrigger>
            <Button className="capitalize" variant={variant}>
              {variant}
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      ))}
    </div>
  );
}
