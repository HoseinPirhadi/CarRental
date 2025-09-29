package com.carrental

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class NavigationBarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "NavigationBar"
    }

    @ReactMethod
    fun setColor(colorHex: String, lightButtons: Boolean) {
        val activity = reactApplicationContext.currentActivity as? MainActivity
        activity?.setNavigationBarColor(colorHex, lightButtons)
    }
}
