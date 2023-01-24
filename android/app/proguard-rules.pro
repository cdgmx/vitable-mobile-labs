# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Add any project specific keep options here:
#Insider
-keep class com.useinsider.insider.Insider { *; }

-keep interface com.useinsider.insider.InsiderCallback { *; }
-keep class com.useinsider.insider.InsiderUser { *; }
-keep class com.useinsider.insider.InsiderProduct { *; }
-keep class com.useinsider.insider.InsiderEvent { *; }
-keep class com.useinsider.insider.InsiderCallbackType { *; }
-keep class com.useinsider.insider.InsiderGender { *; }
-keep class com.useinsider.insider.InsiderIdentifiers { *; }

-keep interface com.useinsider.insider.RecommendationEngine$SmartRecommendation { *; }
-keep interface com.useinsider.insider.MessageCenterData { *; }
-keep class com.useinsider.insider.Geofence { *; }
-keep class com.useinsider.insider.ContentOptimizerDataType { *; }
-keep class org.openudid.** { *; }
-keep class com.useinsider.insider.OpenUDID_manager { *; }
