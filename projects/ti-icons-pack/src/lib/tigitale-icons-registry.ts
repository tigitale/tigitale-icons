import { Injectable } from '@angular/core';
import { tigitaleIcon, TigitaleIcon } from './tigitale-icons';
import {
    tigitaleIcons360,
    tigitaleIconsAdvertisement,
    tigitaleIconsAirplay,
    tigitaleIconsAlarm,
    tigitaleIconsAlarmChecked,
    tigitaleIconsAlarmMinus,
    tigitaleIconsAlarmNo,
    tigitaleIconsAlarmPlus,
    tigitaleIconsAlarmSnooze,
    tigitaleIconsAlertCircle,
    tigitaleIconsAlertOctagon,
    tigitaleIconsAlertTriangle,
    tigitaleIconsAppNotification,
    tigitaleIconsArrowBottom,
    tigitaleIconsArrowBottomLeft,
    tigitaleIconsArrowBottomRight,
    tigitaleIconsArrowForward,
    tigitaleIconsArrowForwardAll,
    tigitaleIconsArrowLeft,
    tigitaleIconsArrowLeftCurved,
    tigitaleIconsArrowRedo,
    tigitaleIconsArrowReply,
    tigitaleIconsArrowReplyAll,
    tigitaleIconsArrowRight,
    tigitaleIconsAlarmMinusRightCurved,
    tigitaleIconsArrowsDiagonals,
    tigitaleIconsArrowsDiagonalsBltr,
    tigitaleIconsArrowsDiagonalsTlbr,
    tigitaleIconsArrowsHv,
    tigitaleIconsArrowTop,
    tigitaleIconsArrowTopLeft,
    tigitaleIconsArrowTopRight,
    tigitaleIconsArrowUndo,
    tigitaleIconsUser,
    tigitaleIconsVideo,
    tigitaleIconsSettings,
    tigitaleIconsCalendarDates,
    tigitaleIconsClipboardtext,
    tigitaleIconsHome,
    tigitaleIconsSearch,
    tigitaleIconsBell,
    tigitaleIconsPin
} from './tigitale-icons';

const iconsList = [
    tigitaleIcons360,
    tigitaleIconsAdvertisement,
    tigitaleIconsAirplay,
    tigitaleIconsAlarm,
    tigitaleIconsAlarmChecked,
    tigitaleIconsAlarmMinus,
    tigitaleIconsAlarmNo,
    tigitaleIconsAlarmPlus,
    tigitaleIconsAlarmSnooze,
    tigitaleIconsAlertCircle,
    tigitaleIconsAlertOctagon,
    tigitaleIconsAlertTriangle,
    tigitaleIconsAppNotification,
    tigitaleIconsArrowBottom,
    tigitaleIconsArrowBottomLeft,
    tigitaleIconsArrowBottomRight,
    tigitaleIconsArrowForward,
    tigitaleIconsArrowForwardAll,
    tigitaleIconsArrowLeft,
    tigitaleIconsArrowLeftCurved,
    tigitaleIconsArrowRedo,
    tigitaleIconsArrowReply,
    tigitaleIconsArrowReplyAll,
    tigitaleIconsArrowRight,
    tigitaleIconsAlarmMinusRightCurved,
    tigitaleIconsArrowsDiagonals,
    tigitaleIconsArrowsDiagonalsBltr,
    tigitaleIconsArrowsDiagonalsTlbr,
    tigitaleIconsArrowsHv,
    tigitaleIconsArrowTop,
    tigitaleIconsArrowTopLeft,
    tigitaleIconsArrowTopRight,
    tigitaleIconsArrowUndo,
    tigitaleIconsUser,
    tigitaleIconsVideo,
    tigitaleIconsSettings,
    tigitaleIconsCalendarDates,
    tigitaleIconsClipboardtext,
    tigitaleIconsHome,
    tigitaleIconsSearch,
    tigitaleIconsBell,
    tigitaleIconsPin
];

@Injectable({
    providedIn: 'root'
})
export class TigitaleIconsRegistry {
    private registry = new Map<string, string>();

    public resgisterIcons(icons: TigitaleIcon[]): void {
        icons.forEach((icon: TigitaleIcon) => this.registry.set(icon.name, icon.data));
    }

    public resgisterIcon(icon: TigitaleIcon): void {
        this.registry.set(icon.name, icon.data);
    }

    public getIcon(iconName: tigitaleIcon): string | undefined {
        if (!this.registry.has(iconName)) {
            this.resgisterIcon(iconsList.filter((icon) => icon.name === iconName)[0]);
        }
        return this.registry.get(iconName);
    }
}