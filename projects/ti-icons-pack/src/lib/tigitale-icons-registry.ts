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
  tigitaleIconsPin,
  tigitaleIconsAtSign,
  tigitaleIconsBarChart,
  tigitaleIconsBaterry,
  tigitaleIconsBattery20,
  tigitaleIconsBaterry40,
  tigitaleIconsBaterry60,
  tigitaleIconsBaterry80,
  tigitaleIconsBaterry100,
  tigitaleIconsBatteryCharching,
  tigitaleIconsBaterryNo,
  tigitaleIconsBellChecked,
  tigitaleIconsBellNo,
  tigitaleIconsBluetooth,
  tigitaleIconsBluetoothNo,
  tigitaleIconsBluetoothBook,
  tigitaleIconsBluetoothBookmark,
  tigitaleIconsBluetoothBookmarkAdd,
  tigitaleIconsBluetoothBookmarkNo,
  tigitaleIconsBluetoothBookmarks,
  tigitaleIconsBox,
  tigitaleIconsBrightnessHigh,
  tigitaleIconsBrightnessLow,
  tigitaleIconsBroadcast,
  tigitaleIconsBroadcasting,
  tigitaleIconsBrowser,
  tigitaleIconsBrowserNo,
  tigitaleIconsCalculator,
  tigitaleIconsCalendar,
  tigitaleIconsCalendarPlus,
  tigitaleIconsCalendarChecked,
  tigitaleIconsCalendarCreate,
  tigitaleIconsCalendarDelete,
  tigitaleIconsCalendarMinus,
  tigitaleIconsCallAdd,
  tigitaleIconsCallCalling,
  tigitaleIconsCallDecline,
  tigitaleIconsCallEnd,
  tigitaleIconsCallForwarded,
  tigitaleIconsCallHash,
  tigitaleIconsCallHold,
  tigitaleIconsCallIncoming,
  tigitaleIconsCallMissed,
  tigitaleIconsCallMuted,
  tigitaleIconsCallNo,
  tigitaleIconsCallNumbers,
  tigitaleIconsCallOutcoming,
  tigitaleIconsCallPhone,
  tigitaleIconsCallRecieve,
  tigitaleIconsCallVoicemail,
  tigitaleIconsCamera,
  tigitaleIconsCameraCreate,
  tigitaleIconsCameraNo,
  tigitaleIconsChevronBotton,
  tigitaleIconsCase,
  tigitaleIconsCast,
  tigitaleIconsCheckMark,
  tigitaleIconsCheckMarks,
  tigitaleIconsChevronLeft,
  tigitaleIconsChevronRight,
  tigitaleIconsChevronTop,
  tigitaleIconsChevronsBotton,
  tigitaleIconsChevronsLeft,
  tigitaleIconsChevronsRight,
  tigitaleIconsChevronsTop,
  tigitaleIconsCircle,
  tigitaleIconsCircleArrowBottom,
  tigitaleIconsCircleArrowBottomRight,
  tigitaleIconsCircleArrowBottomLeft,
  tigitaleIconsCircleArrowLeft,
  tigitaleIconsCircleArrowLeftCurved,
  tigitaleIconsCircleArrowRight,
  tigitaleIconsCircleArrowRightCurved,
  tigitaleIconsCircleArrowTop,
  tigitaleIconsCircleArrowTopLeft,
  tigitaleIconsCircleArrowTopRight,
  tigitaleIconsCircleBlock,
  tigitaleIconsCircleChecked,
  tigitaleIconsCircleChevronBottom,
  tigitaleIconsCircleChevronLeft,
  tigitaleIconsCircleChevronRight,
  tigitaleIconsCircleChevronTop,
  tigitaleIconsCircleMinus,
  tigitaleIconsCircleMenu,
  tigitaleIconsCircleMoreHorizontal,
  tigitaleIconsCircleMoreVertial,
  tigitaleIconsCirclePlus,
  tigitaleIconsCircleStar,
  tigitaleIconsCircleX,
  tigitaleIconsClearStyle,
  tigitaleIconsClipboard,
  tigitaleIconsClipboardChecked,
  tigitaleIconsClipboardDelete,
  tigitaleIconsClipboardMinus,
  tigitaleIconsClipboardPlus,
  tigitaleIconsCloud,
  tigitaleIconsCloudDownload,
  tigitaleIconsCloudChecked,
  tigitaleIconsCloudNo,
  tigitaleIconsCloudUpload,
  tigitaleIconsCommand,
  tigitaleIconsComment,
  tigitaleIconsCommentText,
  tigitaleIconsCommentChecked,
  tigitaleIconsCommentDelete,
  tigitaleIconsCommentMinus,
  tigitaleIconsCommentPlus,
  tigitaleIconsCompas,
  tigitaleIconsCopy,
  tigitaleIconsCreditcard,
  tigitaleIconsCreditcardAdd,
  tigitaleIconsCreditcardFace,
  tigitaleIconsCreditcardIncome,
  tigitaleIconsCreditcardNo,
  tigitaleIconsCreditcardOutcome,
  tigitaleIconsCreditcardScan,
  tigitaleIconsCross,
  tigitaleIconsCrosshairs,
  tigitaleIconsCut,
  tigitaleIconsFilter,
  tigitaleIconsFile,
  tigitaleIconsFileChecked,
  tigitaleIconsFileCode,
  tigitaleIconsFileCreate,
  tigitaleIconsFileDelete,
  tigitaleIconsFileDownload,
  tigitaleIconsFileDraft,
  tigitaleIconsFileMinus,
  tigitaleIconsFilePlus,
  tigitaleIconsFileScan,
  tigitaleIconsFileShredder,
  tigitaleIconsFileText,
  tigitaleIconsFileUpload,
  tigitaleIconsFlame,
  tigitaleIconsTrashCard,
  tigitaleIconsFloppy,
  tigitaleIconsFolder,
  tigitaleIconsFolderArrow,
  tigitaleIconsFolderChecked,
  tigitaleIconsFolderCloud,
  tigitaleIconsFolderDelete,
  tigitaleIconsFolderMinus,
  tigitaleIconsFolderPlus,
  tigitaleIconsFolderOpened,
  tigitaleIconsFolderPhoto,
  tigitaleIconsForm,
  tigitaleIconsGlobeNo,
  tigitaleIconsGlobe,
  tigitaleIconsHash,
  tigitaleIconsHeart,
  tigitaleIconsHeartNo,
  tigitaleIconsImage,
  tigitaleIconsInbox,
  tigitaleIconsInfo,
  tigitaleIconsIpad,
  tigitaleIconsIphone,
  tigitaleIconsItems,
  tigitaleIconsKey,
  tigitaleIconsKeyNo,
  tigitaleIconsLaptop,
  tigitaleIconsLayers,
  tigitaleIconsLightbulb,
  tigitaleIconsLightning,
  tigitaleIconsLightningNo,
  tigitaleIconsLink,
  tigitaleIconsLinkNo,
  tigitaleIconsList,
  tigitaleIconsLocation,
  tigitaleIconsLocationNo,
  tigitaleIconsLock,
  tigitaleIconsLockCircle,
  tigitaleIconsLockNo,
  tigitaleIconsMail,
  tigitaleIconsMap,
  tigitaleIconsMaximize,
  tigitaleIconsMemoryCard,
  tigitaleIconsMenu,
  tigitaleIconsMenuDots,
  tigitaleIconsMic,
  tigitaleIconsMicNo,
  tigitaleIconsMinimize,
  tigitaleIconsMinus,
  tigitaleIconsMinusOctagon
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
  tigitaleIconsPin,
  tigitaleIconsAtSign,
  tigitaleIconsBarChart,
  tigitaleIconsBaterry,
  tigitaleIconsBattery20,
  tigitaleIconsBaterry40,
  tigitaleIconsBaterry60,
  tigitaleIconsBaterry80,
  tigitaleIconsBaterry100,
  tigitaleIconsBatteryCharching,
  tigitaleIconsBaterryNo,
  tigitaleIconsBellChecked,
  tigitaleIconsBellNo,
  tigitaleIconsBox,
  tigitaleIconsBluetooth,
  tigitaleIconsBluetoothNo,
  tigitaleIconsBluetoothBook,
  tigitaleIconsBluetoothBookmark,
  tigitaleIconsBluetoothBookmarkAdd,
  tigitaleIconsBluetoothBookmarkNo,
  tigitaleIconsBluetoothBookmarks,
  tigitaleIconsBox,
  tigitaleIconsBrightnessHigh,
  tigitaleIconsBrightnessLow,
  tigitaleIconsBroadcast,
  tigitaleIconsBroadcasting,
  tigitaleIconsBrowser,
  tigitaleIconsBrowserNo,
  tigitaleIconsCalendar,
  tigitaleIconsCalculator,
  tigitaleIconsCalendarPlus,
  tigitaleIconsCalendarChecked,
  tigitaleIconsCalendarCreate,
  tigitaleIconsCalendarDelete,
  tigitaleIconsCalendarMinus,
  tigitaleIconsCallAdd,
  tigitaleIconsCallCalling,
  tigitaleIconsCallDecline,
  tigitaleIconsCallEnd,
  tigitaleIconsCallForwarded,
  tigitaleIconsCallHash,
  tigitaleIconsCallHold,
  tigitaleIconsCallIncoming,
  tigitaleIconsCallMissed,
  tigitaleIconsCallMuted,
  tigitaleIconsCallNo,
  tigitaleIconsCallNumbers,
  tigitaleIconsCallOutcoming,
  tigitaleIconsCallPhone,
  tigitaleIconsCallRecieve,
  tigitaleIconsCallVoicemail,
  tigitaleIconsCamera,
  tigitaleIconsCameraNo,
  tigitaleIconsCameraCreate,
  tigitaleIconsCase,
  tigitaleIconsCast,
  tigitaleIconsCheckMark,
  tigitaleIconsCheckMarks,
  tigitaleIconsChevronBotton,
  tigitaleIconsChevronLeft,
  tigitaleIconsChevronRight,
  tigitaleIconsChevronTop,
  tigitaleIconsChevronsBotton,
  tigitaleIconsChevronsLeft,
  tigitaleIconsChevronsRight,
  tigitaleIconsChevronsTop,
  tigitaleIconsCircle,
  tigitaleIconsCircleArrowBottom,
  tigitaleIconsCircleArrowBottomRight,
  tigitaleIconsCircleArrowBottomLeft,
  tigitaleIconsCircleArrowLeft,
  tigitaleIconsCircleArrowLeftCurved,
  tigitaleIconsCircleArrowRight,
  tigitaleIconsCircleArrowRightCurved,
  tigitaleIconsCircleArrowTop,
  tigitaleIconsCircleArrowTopLeft,
  tigitaleIconsCircleArrowTopRight,
  tigitaleIconsCircleBlock,
  tigitaleIconsCircleChecked,
  tigitaleIconsCircleChevronBottom,
  tigitaleIconsCircleChevronLeft,
  tigitaleIconsCircleChevronRight,
  tigitaleIconsCircleChevronTop,
  tigitaleIconsCircleMinus,
  tigitaleIconsCircleMenu,
  tigitaleIconsCircleMoreHorizontal,
  tigitaleIconsCircleMoreVertial,
  tigitaleIconsCirclePlus,
  tigitaleIconsCircleStar,
  tigitaleIconsCircleX,
  tigitaleIconsClearStyle,
  tigitaleIconsClipboard,
  tigitaleIconsClipboardChecked,
  tigitaleIconsClipboardDelete,
  tigitaleIconsClipboardMinus,
  tigitaleIconsClipboardPlus,
  tigitaleIconsCloud,
  tigitaleIconsCloudDownload,
  tigitaleIconsCloudChecked,
  tigitaleIconsCloudNo,
  tigitaleIconsCloudUpload,
  tigitaleIconsCommand,
  tigitaleIconsComment,
  tigitaleIconsCommentText,
  tigitaleIconsCommentChecked,
  tigitaleIconsCommentDelete,
  tigitaleIconsCommentMinus,
  tigitaleIconsCommentPlus,
  tigitaleIconsCompas,
  tigitaleIconsCopy,
  tigitaleIconsCreditcard,
  tigitaleIconsCreditcardAdd,
  tigitaleIconsCreditcardFace,
  tigitaleIconsCreditcardIncome,
  tigitaleIconsCreditcardNo,
  tigitaleIconsCreditcardOutcome,
  tigitaleIconsCreditcardScan,
  tigitaleIconsCross,
  tigitaleIconsCrosshairs,
  tigitaleIconsCut,
  tigitaleIconsFilter,
  tigitaleIconsFile,
  tigitaleIconsFileChecked,
  tigitaleIconsFileCode,
  tigitaleIconsFileCreate,
  tigitaleIconsFileDelete,
  tigitaleIconsFileDownload,
  tigitaleIconsFileUpload,
  tigitaleIconsFileDraft,
  tigitaleIconsFileMinus,
  tigitaleIconsFilePlus,
  tigitaleIconsFileScan,
  tigitaleIconsFileShredder,
  tigitaleIconsFileText,
  tigitaleIconsFlame,
  tigitaleIconsTrashCard,
  tigitaleIconsFloppy,
  tigitaleIconsFolder,
  tigitaleIconsFolderArrow,
  tigitaleIconsFolderChecked,
  tigitaleIconsFolderCloud,
  tigitaleIconsFolderDelete,
  tigitaleIconsFolderMinus,
  tigitaleIconsFolderPlus,
  tigitaleIconsFolderOpened,
  tigitaleIconsFolderPhoto,
  tigitaleIconsForm,
  tigitaleIconsGlobeNo,
  tigitaleIconsGlobe,
  tigitaleIconsHash,
  tigitaleIconsHeart,
  tigitaleIconsHeartNo,
  tigitaleIconsImage,
  tigitaleIconsInbox,
  tigitaleIconsInfo,
  tigitaleIconsIpad,
  tigitaleIconsIphone,
  tigitaleIconsItems,
  tigitaleIconsKey,
  tigitaleIconsKeyNo,
  tigitaleIconsLaptop,
  tigitaleIconsLayers,
  tigitaleIconsLightbulb,
  tigitaleIconsLightning,
  tigitaleIconsLightningNo,
  tigitaleIconsLink,
  tigitaleIconsLinkNo,
  tigitaleIconsList,
  tigitaleIconsLocation,
  tigitaleIconsLocationNo,
  tigitaleIconsLock,
  tigitaleIconsLockCircle,
  tigitaleIconsLockNo,
  tigitaleIconsMail,
  tigitaleIconsMap,
  tigitaleIconsMaximize,
  tigitaleIconsMemoryCard,
  tigitaleIconsMenu,
  tigitaleIconsMenuDots,
  tigitaleIconsMic,
  tigitaleIconsMicNo,
  tigitaleIconsMinimize,
  tigitaleIconsMinus,
  tigitaleIconsMinusOctagon
];

@Injectable({
  providedIn: 'root',
})
export class TigitaleIconsRegistry {
  private registry = new Map<string, string>();

  public resgisterIcons(icons: TigitaleIcon[]): void {
    icons.forEach((icon: TigitaleIcon) =>
      this.registry.set(icon.name, icon.data)
    );
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
