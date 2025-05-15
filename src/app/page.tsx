// import Image from "next/image";

'use client';
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { AuroraText } from '@/components/magicui/aurora-text';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed right-4 top-4 z-50 rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Page() {
  return (
    <SidebarProvider>
      <ThemeToggle />
      <AppSidebar />
      <SidebarInset className="relative">
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger className="z-50" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Notre aventure avec Zigomar
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-4 py-10 z-50">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold">
                Voyage en mer avec{' '}
                <AuroraText className="text-4xl">Zigomar</AuroraText>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bienvenue sur la page de suivi de notre voyage en mer à bord de
                Zigomar. Cette carte interactive vous permet de suivre notre
                position en temps réel pendant notre aventure maritime.
                Rejoignez-nous virtuellement dans cette expédition et découvrez
                les merveilles de la navigation.
              </p>
            </div>

            <div className="h-[60vh] w-full rounded-xl bg-muted/50 ">
              <iframe
                src="https://www.konectis.com/embed/7e9da59bde911fdac741ba5a57d7480f"
                frameBorder="0"
                className="h-full w-full rounded-xl"
                title="Suivi de trajet en bateau"
              />
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>À propos de notre voyage</h2>
              <p>
                Notre périple a débuté le 15 juin 2023 depuis le port de
                Marseille. Avec Zigomar, notre fidèle voilier, nous explorons la
                Méditerranée et partageons cette aventure avec vous. La carte
                ci-dessus est mise à jour régulièrement pour vous permettre de
                suivre notre progression.
              </p>
              <p>
                N&apos;hésitez pas à revenir sur cette page pour voir notre
                avancée et découvrir les nouveaux lieux que nous visitons. Bon
                vent !
              </p>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </SidebarInset>
    </SidebarProvider>
  );
}
