import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Briefcase, Search, Users, Calendar as CalendarIcon, MessageSquare, Sparkles, LogOut, Mail, Phone, MapPin as LocationIcon, GraduationCap, BookOpen, Users as UsersIcon, ChartBar, Globe, Linkedin, Github, Twitter } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import shreyImage from "/public/WhatsApp Image 2024-10-03 at 23.35.31_e48d3cc3.jpg"; 



function CareerGuidance() {
    return (
      <div className="py-16 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 mb-8">Career Guidance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-700 to-cyan-800 border-none transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50">
              <CardHeader>
                <CardTitle className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  <GraduationCap className="mr-2" />
                  Career Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">Get expert advice on planning your career path and setting achievable goals.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-700 to-pink-800 border-none transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50">
              <CardHeader>
                <CardTitle className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  <BookOpen className="mr-2" />
                  Skill Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100">Access resources and workshops to enhance your skills and stay competitive.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-700 to-orange-800 border-none transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50">
              <CardHeader>
                <CardTitle className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300">
                  <UsersIcon className="mr-2" />
                  Networking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pink-100">Connect with industry professionals and fellow alumni to expand your network.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  export default CareerGuidance;