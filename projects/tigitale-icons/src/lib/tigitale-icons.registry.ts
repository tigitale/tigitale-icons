import { Injectable } from '@angular/core';
import { TigitaleIcon } from './tigitale-icons';

@Injectable({
    providedIn: 'root'
})

export class TigitaleIconsRegistry {
    private registry = new Map<string, string>();

    public resgisterIcons(icons: TigitaleIcon[]): void {
        icons.forEach((icon: TigitaleIcon) => this.registry.set(icon.name, icon.data));
    }

    public getIcon(iconName: string): string | undefined {
        if (!this.registry.has(iconName)) {
            console.warn(`Nós não conseguimos achar o icone ${iconName}`);
        }
        return this.registry.get(iconName);
    }
}