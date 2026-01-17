'use client';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage, AvatarFallbackProps, AvatarImageProps, AvatarProps } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";




const UserDropdown = () => {
    const router: AppRouterInstance = useRouter();

    const handleSignOut = async (): Promise<void> => {
        router.push('/signout');
    }

    const user = { name: 'Eric', email: 'defideveric@gmail.com' };

  return (
   <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
            <Avatar className="h-8 w-8">
                <AvatarImage src=""/>
                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                    {user.name[0]}
                </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col items-start">
                <span className="font-medium text-base text-gray-400">{user.name}</span>
                <span className="text-xs text-gray-400">{user.email}</span>
            </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400" align="start">
        <DropdownMenuLabel>
            <div className="flex-relative items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
                <AvatarImage src=""/>
                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                    {user.name[0]}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="font-medium text-base text-gray-400">
                    {user.name}
                </span>
                <span className="text-sm text-gray-500">
                    {user.email}
                </span>
            </div>
        </div>
        <DropdownMenuSeparator className="bg-gray-600" />
            <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                <LogOut className="h-4 w-4 mr-2 hidden sm:block"/>
                Sign Out   
            </DropdownMenuItem>
            <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
            <nav className="sm:hidden">
                <NavItems/>
            </nav>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown