import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [preferences, setPreferences] = useState({ notifications: true, theme: "light" });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={profile.name} onChange={handleProfileChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={profile.email} onChange={handleProfileChange} />
            </div>
            <Button>Update Profile</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="notifications">Notifications</Label>
              <Switch id="notifications" name="notifications" checked={preferences.notifications} onChange={handleSwitchChange} />
            </div>
            <div>
              <Label htmlFor="theme">Theme</Label>
              <Input id="theme" name="theme" value={preferences.theme} onChange={handlePreferencesChange} />
            </div>
            <Button>Update Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;