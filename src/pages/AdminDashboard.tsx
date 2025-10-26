import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Mail, FileText, LogOut } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [admissionApps, setAdmissionApps] = useState<any[]>([]);
  const [contactMsgs, setContactMsgs] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is admin
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "admin") {
      navigate("/login");
      return;
    }

    // Load data from localStorage
    setAdmissionApps(JSON.parse(localStorage.getItem("admissionApplications") || "[]"));
    setContactMsgs(JSON.parse(localStorage.getItem("contactMessages") || "[]"));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const stats = [
    { label: "Total Students", value: "1,248", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: "Total Teachers", value: "84", icon: GraduationCap, color: "from-green-500 to-green-600" },
    { label: "Applications", value: admissionApps.length.toString(), icon: FileText, color: "from-purple-500 to-purple-600" },
    { label: "Messages", value: contactMsgs.length.toString(), icon: Mail, color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-primary-foreground/80">Manage your school's data and operations</p>
            </div>
            <Button 
              variant="secondary" 
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="students" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="teachers">Teachers</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle>Student Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Student management features coming soon. You can add CRUD operations for students here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teachers">
              <Card>
                <CardHeader>
                  <CardTitle>Teacher Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Teacher management features coming soon. You can add CRUD operations for teachers here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle>Admission Applications ({admissionApps.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {admissionApps.length === 0 ? (
                      <p className="text-muted-foreground">No applications yet.</p>
                    ) : (
                      admissionApps.map((app) => (
                        <div key={app.id} className="p-4 border rounded-lg">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">{app.studentName}</p>
                              <p className="text-sm text-muted-foreground">Grade: {app.grade}</p>
                              <p className="text-sm text-muted-foreground">DOB: {app.dateOfBirth}</p>
                            </div>
                            <div>
                              <p className="text-sm"><strong>Parent:</strong> {app.parentName}</p>
                              <p className="text-sm"><strong>Email:</strong> {app.email}</p>
                              <p className="text-sm"><strong>Phone:</strong> {app.phone}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Messages ({contactMsgs.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactMsgs.length === 0 ? (
                      <p className="text-muted-foreground">No messages yet.</p>
                    ) : (
                      contactMsgs.map((msg) => (
                        <div key={msg.id} className="p-4 border rounded-lg">
                          <div className="mb-2">
                            <p className="font-semibold">{msg.name}</p>
                            <p className="text-sm text-muted-foreground">{msg.email} | {msg.phone}</p>
                          </div>
                          <p className="text-sm font-medium mb-1">Subject: {msg.subject}</p>
                          <p className="text-sm text-muted-foreground">{msg.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
