import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function DesignSystemPage() {
    return (
        <div className="container mx-auto py-10 space-y-16">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Design System</h1>
                <p className="text-muted-foreground text-lg">
                    A collection of design tokens, components, and styles used in Loca House.
                </p>
            </div>

            {/* Typography Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold border-b pb-2">Typography</h2>

                <div className="grid gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Headings</h3>
                        <div className="space-y-4">
                            <div className="flex items-baseline gap-4">
                                <span className="w-24 text-sm text-muted-foreground">H1</span>
                                <h1>The quick brown fox jumps over the lazy dog</h1>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="w-24 text-sm text-muted-foreground">H2</span>
                                <h2>The quick brown fox jumps over the lazy dog</h2>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="w-24 text-sm text-muted-foreground">H3</span>
                                <h3>The quick brown fox jumps over the lazy dog</h3>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="w-24 text-sm text-muted-foreground">H4</span>
                                <h4>The quick brown fox jumps over the lazy dog</h4>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="w-24 text-sm text-muted-foreground">H5</span>
                                <h5>The quick brown fox jumps over the lazy dog</h5>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="w-24 text-sm text-muted-foreground">H6</span>
                                <h6>The quick brown fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Font Families</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 border rounded-lg">
                                <p className="text-sm text-muted-foreground mb-2">Brand Font</p>
                                <p className="text-3xl font-brand">Aclonica</p>
                                <p className="mt-2 text-sm opacity-70">Used for primary headings and brand elements</p>
                            </div>
                            <div className="p-6 border rounded-lg">
                                <p className="text-sm text-muted-foreground mb-2">Display Font</p>
                                <p className="text-3xl font-display">Inter</p>
                                <p className="mt-2 text-sm opacity-70">Used for secondary headings and UI elements</p>
                            </div>
                            <div className="p-6 border rounded-lg">
                                <p className="text-sm text-muted-foreground mb-2">Body Font</p>
                                <p className="text-3xl font-body">Quicksand</p>
                                <p className="mt-2 text-sm opacity-70">Used for body text and general content</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold border-b pb-2">Colors</h2>

                <div className="space-y-6">
                    <h3 className="text-lg font-medium text-muted-foreground">Base Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ColorSwatch name="Background" variable="bg-background" text="text-foreground" border />
                        <ColorSwatch name="Foreground" variable="bg-foreground" text="text-background" />
                        <ColorSwatch name="Primary" variable="bg-primary" text="text-primary-foreground" />
                        <ColorSwatch name="Secondary" variable="bg-secondary" text="text-secondary-foreground" />
                        <ColorSwatch name="Accent" variable="bg-accent" text="text-accent-foreground" />
                        <ColorSwatch name="Muted" variable="bg-muted" text="text-muted-foreground" />
                        <ColorSwatch name="Destructive" variable="bg-destructive" text="text-destructive-foreground" />
                        <ColorSwatch name="Card" variable="bg-card" text="text-card-foreground" border />
                    </div>

                    <h3 className="text-lg font-medium text-muted-foreground">Brand Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ColorSwatch name="Brand Yellow" variable="bg-brand-yellow" text="text-black" />
                        <ColorSwatch name="Brand Magenta" variable="bg-brand-magenta" text="text-white" />
                        <ColorSwatch name="Brand Teal" variable="bg-brand-teal" text="text-white" />
                    </div>
                </div>
            </section>

            {/* Components Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold border-b pb-2">Components</h2>

                <div className="grid gap-8">
                    {/* Buttons */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Buttons</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                            <Button variant="destructive">Destructive</Button>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                            <Button size="icon">Icon</Button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Cards</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content area. This is a standard shadcn card component.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Action</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    {/* Custom Components */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Custom Components</h3>
                        <div className="flex flex-wrap gap-6 items-center">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">.btn-loca</p>
                                <button className="btn-loca">Loca Button</button>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">.text-glow-yellow</p>
                                <p className="text-4xl font-brand text-primary text-glow-yellow">Glowing Text</p>
                            </div>
                        </div>
                    </div>

                    {/* Skeleton */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Skeleton</h3>
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    </div>

                    {/* Aspect Ratio */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-muted-foreground">Aspect Ratio (16/9)</h3>
                        <div className="w-[450px]">
                            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
                                <p className="text-muted-foreground">Image Placeholder</p>
                            </AspectRatio>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

function ColorSwatch({ name, variable, text, border }: { name: string; variable: string; text?: string; border?: boolean }) {
    return (
        <div className={`p-4 rounded-lg space-y-2 ${variable} ${border ? 'border' : ''}`}>
            <div className="flex justify-between items-center">
                <span className={`font-medium ${text}`}>{name}</span>
            </div>
            <div className={`text-xs opacity-80 ${text}`}>{variable.replace('bg-', '')}</div>
        </div>
    );
}

